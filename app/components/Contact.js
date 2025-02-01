import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [statusColor, setStatusColor] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending.....");
        setStatusColor("text-blue-600");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message Sent Successfully!");
                setStatusColor("text-green-600");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("Failed to Send Message.");
                setStatusColor("text-red-600");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Something went wrong. Please try again.");
            setStatusColor("text-red-600");
        }

        // Automatically clear the status after 3 seconds
        setTimeout(() => {
            setStatus("");
        }, 3000);
    };


    return (
        <section id="contact" className="py-16 px-4 sm:px-5 lg:px-6">
            <div className="container border-4 p-6 sm:p-12 rounded-2xl shadow-lg mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-600">Contact Us</h2>
                    <p className="text-black mt-4 font-medium">Get in Touch with Us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 shadow-lg shadow-grey border-r-2 sm:border-r-2 border-yellow-600 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Address</h3>
                        <p className="font-medium text-black hover:text-yellow-600">GHS Shuhada-e-APS, Model Town, Lahore</p>
                    </div>
                    <div className="p-6 shadow-lg shadow-grey border-r-2 sm:border-r-2 border-yellow-600 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Phone Number</h3>
                        <p className="font-medium text-black hover:text-yellow-600">
                            <a href="tel:+923214774135" className="hover:underline">0321 4774135 for Ladies</a> | <a href="tel:+923214774136" className="hover:underline">0321 4774136 for Gents</a>
                        </p>
                    </div>


                    <div className="p-6 shadow-lg shadow-grey text-center border-r-2 sm:border-r-2 border-yellow-600">
                        <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Email</h3>
                        <p className="font-medium text-black hover:text-yellow-600"><a href="mailto:[kidpreneurs@jiotp.com]" className="hover:underline">kidpreneurs@jiotp.com</a></p>
                    </div>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit} method="post" className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control w-full p-3 sm:p-4 border border-gray-300 rounded-md text-gray-700 bg-white"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    minLength="4"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control w-full p-3 sm:p-4 border border-gray-300 rounded-md text-gray-700 bg-white"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    pattern="^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="form-control w-full p-3 sm:p-4 border border-gray-300 rounded-md text-gray-700 bg-white"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                className="form-control w-full p-3 sm:p-4 border border-gray-300 rounded-md text-gray-700 bg-white"
                                placeholder="Add Package Name"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="text-left">
                            <button
                                type="submit"
                                className="btn py-3 px-6 font-semibold text-white bg-yellow-600 hover:bg-black hover:text-yellow-600 rounded-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    <div className={`mt-6 text-center font-bold ${statusColor}`}>{status}</div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
