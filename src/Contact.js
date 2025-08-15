import React from "react";

function Contact() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = "athosmpano427@email.com";
  //   const subject = encodeURIComponent(form.subject.value);
  //   const body = encodeURIComponent(`Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`);
  //   window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  // };
  return (
    <section id="contact" className="relative py-28 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">Contact Us</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-12 border border-blue-100 backdrop-blur-lg">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:shyaka45@gmail.com" className="text-blue-500 hover:underline">shyaka45@gmail.com</a></p>
            <p className="text-lg text-gray-700 mb-2">Phone: <a href="tel:+250788387188" className="text-blue-500 hover:underline">+250788387188</a></p>
            <p className="text-lg text-gray-700">Address: Kigali, Rwanda</p>
          </div>
          {/* Contact Form */}
          {/* <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full px-5 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full px-5 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-5 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80" placeholder="Subject" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-5 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200">Send Message</button>
          </form> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
