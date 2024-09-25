import React, { useState } from 'react';

function PartnerForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    contactPersonPhone: '',
    contactPersonEmail: ''
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Ensure that the phone number is at least 10 digits long
  const validatePhoneNumber = (number) => {
    return /^\d{10,}$/.test(number); // Ensure the number is at least 10 digits
  };

  const handlePhoneInput = (e) => {
    const { value } = e.target;
    if (value === '' || /^\d+$/.test(value)) {
      setFormData({
        ...formData,
        contactPersonPhone: value
      });
      setErrors({
        ...errors,
        contactPersonPhone: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.companyName) newErrors.companyName = 'This field is required';
    if (!formData.contactPersonName) newErrors.contactPersonName = 'This field is required';
    if (!formData.contactPersonPhone) {
      newErrors.contactPersonPhone = 'This field is required';
    } else if (!validatePhoneNumber(formData.contactPersonPhone)) {
      newErrors.contactPersonPhone = 'Phone number must be at least 10 digits';
    }
    if (!formData.contactPersonEmail) newErrors.contactPersonEmail = 'This field is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Clear form data after submission
      setFormData({
        companyName: '',
        contactPersonName: '',
        contactPersonPhone: '',
        contactPersonEmail: ''
      });

      // Show success toast
      setToast('Form submitted successfully');
      
      // Hide toast after 3 seconds
      setTimeout(() => setToast(''), 3000);
    }
  };

  return (
    <>
      <form className='flex flex-col justify-center items-center text-left px-6 py-20 md:px-32 md:pt-44' onSubmit={handleSubmit}>
        <h1 className='w-full md:w-1/2 text-[16px] font-semibold text-[#3f426f] mb-4'>
          Please Fill the Form Below
        </h1>

        <label htmlFor="companyName" className='w-full md:w-1/2 mb-2 text-[16px] font-normal text-[#666666]'>
          Company Name <span className='text-red-500'>*</span>
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className='border w-full md:w-1/2 border-[#aaaaaa] h-8'
        />
        {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}

        <label htmlFor="contactPersonName" className='w-full md:w-1/2 mb-2 mt-4 text-[16px] font-normal text-[#666666]'>
          Contact Person Name <span className='text-red-500'>*</span>
        </label>
        <input
          type="text"
          name="contactPersonName"
          id="contactPersonName"
          value={formData.contactPersonName}
          onChange={handleInputChange}
          className='border w-full md:w-1/2 border-[#aaaaaa] h-8'
        />
        {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName}</p>}

        <label htmlFor="contactPersonPhone" className='w-full md:w-1/2 mb-2 mt-4 text-[16px] font-normal text-[#666666]'>
          Contact Person Phone Number <span className='text-red-500'>*</span>
        </label>
        <input
          type="text"
          name="contactPersonPhone"
          id="contactPersonPhone"
          value={formData.contactPersonPhone}
          onChange={handlePhoneInput}
          className='border w-full md:w-1/2 border-[#aaaaaa] h-8'
          inputMode="numeric" // Set input mode for better mobile experience
        />
        {errors.contactPersonPhone && <p className="text-red-500 text-sm">{errors.contactPersonPhone}</p>}

        <label htmlFor="contactPersonEmail" className='w-full md:w-1/2 mb-2 mt-4 text-[16px] font-normal text-[#666666]'>
          Contact Person Email <span className='text-red-500'>*</span>
        </label>
        <input
          type="email"
          name="contactPersonEmail"
          id="contactPersonEmail"
          value={formData.contactPersonEmail}
          onChange={handleInputChange}
          className='border w-full md:w-1/2 border-[#aaaaaa] h-8'
        />
        {errors.contactPersonEmail && <p className="text-red-500 text-sm">{errors.contactPersonEmail}</p>}

        <button type="submit" className='uppercase bg-[#1ecb15] text-white w-40  text-center h-8 mt-5 ml-auto self-end md:mr-32 lg:mr-48 xl:mr-[270px]'>
  Get Quote Now
</button>
      </form>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded">
          {toast}
        </div>
      )}
    </>
  );
}

export default PartnerForm;
