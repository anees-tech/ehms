import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    contact_number: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    from_name: false,
    from_email: false,
    contact_number: false,
    message: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Initialize emailjs with publicKey
  useEffect(() => {
    emailjs.init("umo8PCs7RkUZI3_qK");
  }, []);

  // Email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone number regex to ensure it's a valid international phone number format
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;

  // Check if all fields are filled and valid
  useEffect(() => {
    const isValid =
      formData.from_name.trim() !== "" &&
      emailRegex.test(formData.from_email) && 
      phoneRegex.test(formData.contact_number) && 
      formData.message.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      contact_number: phone,
    });
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rgbcy3m", "template_m688z7d", form.current)
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Your message has been sent successfully!");

          // Clear form data and touched fields
          setFormData({
            from_name: "",
            from_email: "",
            contact_number: "",
            message: "",
          });

          setTouched({
            from_name: false,
            from_email: false,
            contact_number: false,
            message: false,
          });

          // Clear the success message after 7 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 7000); // 7 seconds duration
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="form"
      className="p-4 sm:p-8 md:p-12 lg:p-20 flex justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row max-w-4xl w-full gap-8 lg:gap-20 rounded-lg">
        {/* Left Section - Form */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 p-6 lg:p-8 bg-white rounded-md shadow-2xl"
        >
          {/* form */}
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {touched.from_name && formData.from_name.trim() === "" && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your full name.
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Example@gmail.com"
                required
                className={`w-full px-4 py-2 border ${
                  emailRegex.test(formData.from_email) || !touched.from_email
                    ? "border-gray-300"
                    : "border-red-500"
                } rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {touched.from_email && !emailRegex.test(formData.from_email) && (
                <p className="text-red-500 text-sm mt-1 ">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="w-full overflow-hidden">
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={'pk'}
                value={formData.contact_number}
                onChange={handlePhoneChange}
                onBlur={() => setTouched({ ...touched, contact_number: true })}
                className="border border-gray-300 rounded-lg border-none"
              /> 
              {touched.contact_number && !phoneRegex.test(formData.contact_number) && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid phone number.
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="w-full h-28 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {touched.message && formData.message.trim() === "" && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a message.
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full flex items-center justify-center px-4 py-2 bg-[#219ebc] text-white font-semibold rounded-lg hover:bg-[#5ac3dd] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid}
            >
              Send <span className="ml-2">➤</span>
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-green-500">{successMessage}</p>
          )}
        </div>
        {/* Right Section - Info */}
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 bg-orange-500 p-6 lg:p-8 shadow-2xl flex rounded-md flex-col justify-center items-center text-white"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Can we help you?
          </h2>
          <p className="text-center mb-6">
            We're happy to answer any questions you may have! Please fill out
            the support form below and a member of our support staff will
            respond as soon as possible.
          </p>
          <div className="letterBoxImageCircle bg-orange-300 scale-90 sm:scale-100 lg:scale-110 p-8 sm:p-10 rounded-full">
            <img
              src="./assets/letterBox.webp"
              alt="Letterbox"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
