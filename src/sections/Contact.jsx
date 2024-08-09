import { useState } from "react";

const Contact = () => {
    const initialState = {
        name: "",
        message: "",
        email: ""
    };

    const [formDetails, setFormDetails] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const onValueChange = (fieldName, value) => {
        setFormDetails(prevDetails => ({ ...prevDetails, [fieldName]: value }));
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(formDetails).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch("https://devform.vercel.app/api/submit/39", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            await response.json();
            setSubmitted(true);
            setError(null);
            setFormDetails(initialState);
        } catch (e) {
            console.error(e);
            setError('Failed to send your message. Please try again later.');
        }
    };

    return (
        <section>
            <h1 className="text-4xl text-left text-black font-bold my-6">Contact me</h1>
            <div className="bg-white text-left text-black rounded-xl p-8 shadow-md">
                <p>Interested in hiring me? Contact me at{" "}
                    <a href="mailto:joshua032702@gmail.com" className="text-blue-600 hover:underline">joshua032702@gmail.com</a>
                </p>
                <form onSubmit={onHandleSubmit} className="mt-3 flex flex-col gap-6">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="text-md bg-white rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
                        value={formDetails.name}
                        onChange={(e) => onValueChange("name", e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="text-md bg-white rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
                        value={formDetails.email}
                        onChange={(e) => onValueChange("email", e.target.value)}
                    />
                    <textarea 
                        placeholder="Message"
                        rows="4"
                        className="text-md bg-white rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
                        value={formDetails.message}
                        onChange={(e) => onValueChange("message", e.target.value)}
                    />
                    {submitted && <p className="text-green-600">Your message has been sent!</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white rounded-xl py-3 px-4 hover:bg-blue-600 transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
