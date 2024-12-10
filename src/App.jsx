
import { useState } from 'react';
import './App.css'
// import logo from './assets/logo.jpg'
// import car from './assets/car.jpg'

function App() {
  const [formData, setFormData] = useState({
    part: "",
    year: "",
    make: "",
    model: "",
    name: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);

    // Perform additional actions, such as sending data to a server
    alert(`Form submitted successfully!\nData: ${JSON.stringify(formData)}`);
  };

  return (
    <>

      <div className='flex justify-between items-center bg-teal-500 p-2 text-white'>
        <div className='flex justify-between items-center gap-6'>
          <h4>Email@gmail.com</h4>
          <h4>Sun-Fri</h4>
        </div>
        <div className='flex justify-between items-center gap-6'>
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Insta
          </a>
          <a href="#" className="hover:underline">
            linkedIn
          </a>
        </div>

      </div>

      <div className='flex justify-between items-center '>
        <div className='flex justify-between items-center gap-9'>
          {/* <img src={logo} alt='Logo' /> */}
          <h4>Logo</h4>
          <nav className='flex justify-start gap-4'>
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Engines
            </a>
            <a href="#" className="hover:underline">
              Transmissions
            </a>
            <a href="#" className="hover:underline">
              Financing
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
        <div className='flex justify-between items-center gap-6'>
          <div>Logo</div>
          <div className='items-center'>
            <h4>Free Consultation</h4>
            <h4>+91-8954684</h4>
          </div>
          <div>
            Market
          </div>
        </div>

      </div>

      <div style={{
        backgroundImage: `url('https://example.com/your-image.jpg')`
      }}>
        <div className="text-center bg-white py-16 px-4">
          <h2 className="text-4xl font-bold text-teal-500">Finance Option Available</h2>
          <div className="mt-8 flex flex-wrap justify-center items-center">
            <form
              className="bg-gray-100 p-4 rounded-md shadow-md max-w-md w-full"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="part"
                  className="border p-2 rounded-md"
                  value={formData.part}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select part
                  </option>
                  <option value="engine">Engine</option>
                  <option value="transmission">Transmission</option>
                </select>
                <select
                  name="year"
                  className="border p-2 rounded-md"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select year
                  </option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
                <select
                  name="make"
                  className="border p-2 rounded-md"
                  value={formData.make}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select make
                  </option>
                  <option value="honda">Honda</option>
                  <option value="toyota">Toyota</option>
                </select>
                <select
                  name="model"
                  className="border p-2 rounded-md"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select model
                  </option>
                  <option value="accord">Accord</option>
                  <option value="camry">Camry</option>
                </select>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="border w-full p-2 mt-4 rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border w-full p-2 mt-4 rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 mt-4 rounded-md"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
