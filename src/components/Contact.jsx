import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formData.user_name.trim()) {
      errors.user_name = 'Navn er påkrævet';
    }

    if (!formData.user_email.trim()) {
      errors.user_email = 'Email er påkrævet';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = 'Email adressen er ugyldig';
    }

    if (!formData.message.trim()) {
      errors.message = 'Besked er påkrævet';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Custom toast success component with icon
  const ToastSuccess = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ backgroundColor: '#4CAF50', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ color: 'white', fontSize: '16px' }}>✓</span>
      </div>
      <p style={{ margin: 0, fontSize: '15px' }}>Din besked er sendt! Jeg vender tilbage hurtigst muligt.</p>
    </div>
  );

  // Custom toast error component with icon
  const ToastError = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ backgroundColor: '#F44336', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ color: 'white', fontSize: '16px' }}>✕</span>
      </div>
      <p style={{ margin: 0, fontSize: '15px' }}>Der opstod en fejl. Prøv venligst igen senere.</p>
    </div>
  );

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      // Show validation error toast
      toast.error("Udfyld venligst alle felter", {
        position: "top-center"
      });
      return;
    }

    setLoading(true);

    emailjs.sendForm('service_0pbqzef',
      'template_5hd1kuk',
      form.current,
      'l2XP3PJbhxSCuC8YK'
    )
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        // Show custom toast notification
        toast(<ToastSuccess />, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'success-toast',
        });
        e.target.reset();
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
        setStatus('success');
        setLoading(false);
      }, (error) => {
        console.log(error.text);
        // Show custom toast error notification
        toast(<ToastError />, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'error-toast',
        });
        setStatus('error');
        setLoading(false);
      });
  };

  return (
    <section id='contact'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="toast-container"
        bodyClassName="toast-body"
        style={{ width: 'auto', maxWidth: '600px' }}
      />
      <div>
        <h1 className='title'>Kontakt mig</h1>
        <p className='contact_text'>Tak fordi du tog dig tid til at udforske min portefølje. Jeg sætter stor pris på din interesse. Hvis du har spørgsmål, feedback eller ønsker at samarbejde på et projekt, er du mere end velkommen til at kontakte mig. Jeg ser frem til at høre fra dig og besvare eventuelle henvendelser.</p>
      </div>
      <div className='contact'>
        <div>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <label className='label'>Name</label>
            <input
              className={`input ${formErrors.user_name ? 'input-error' : ''}`}
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            {formErrors.user_name && <span className="error-message">{formErrors.user_name}</span>}

            <label className='label'>Email</label>
            <input
              className={`input ${formErrors.user_email ? 'input-error' : ''}`}
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            {formErrors.user_email && <span className="error-message">{formErrors.user_email}</span>}

            <label className='label'>Message</label>
            <textarea
              className={`textarea ${formErrors.message ? 'input-error' : ''}`}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}

            <input
              className='input submit-btn'
              type="submit"
              value={loading ? "Sender..." : "Send"}
              disabled={loading}
            />
          </form>
        </div>
        <img className="img_container velkommen_img" src="./emil_linkedin.png" alt="Mig(Emil Schmidt) der smiler med hænderne over kryds" />
      </div>
      <div className='some'>
        <div className='some_text'>
          <a href="https://www.linkedin.com/in/emil-schmidt-7656a9215/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
            <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
          </svg>
          </a>
          <p>Linked in</p>
        </div>
        <div className='some_text'>
          <a href="https://www.instagram.com/schmidtii00"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
            <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
          </svg></a>
          <p>Instagram</p>
        </div>
        <div className='some_text'>
          <a href="https://www.facebook.com/emil.schmidt.90/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
            <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
          </svg></a>
          <p>Facebook</p>
        </div>
      </div>
    </section>


  )
}