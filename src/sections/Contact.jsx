import { useState } from "react";

const Contact = () => {
    const initialState ={
        name: "",
        message: "",
        email: ""
    };

    const [formDetails, setFormDetails] = useState(initialState);
    const [submitted, setSubmitted] =useState(false);

    const onValueChange = (fieldName, value) => {
        const updatedFormDetails = { ...formDetails, [fieldName]: value};
        setFormDetails(updatedFormDetails);
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        for (const name in formDetails) {
            formData.append(name, formDetails[name]);
        }
        try {
            const response = await fetch("https://devform.vercel.app/api/submit/39", {
                method: "POST",
                body: formData,
                contentType: "application/json"
            });
            const result = await response.json();
            setSubmitted(true);
            
        } catch (e) {
            console.log(e);
        }
        setFormDetails(initialState);
    };
    
    return ( <section>
       <h1 className="text-4xl text-left font-bold my-6">Contact me</h1>
       <div className="bg-white text-left rounded-xl p-8">
       <p>Interested in hiring me? contact me at{" "}
        <a href="mailto:joshua032702@gmail.com">joshua032702@gmail.com</a>
       </p>
       <form onSubmit={onHandleSubmit} className="mt-3 flex flex-col gap-6">
        <input type="text" placeholder="your name" className="text-md bg-background rounded-xl px-4 py-3 
        placeholder-opacity-50 focus:outline-none border w-full"
        value={formDetails.name}
        onChange={(e) => onValueChange("name", e.target.value)}
        />
        <input type="email" placeholder="your email"
        className="text-md bg-background rounded-xl px-4 py-3 
        placeholder-opacity-50 focus:outline-none border w-full"
        value={formDetails.email}
        onChange={(e) => onValueChange("email", e.target.value)}
        />
        <textarea placeholder="your message"
        rows="4"
        className="text-md bg-background rounded-xl px-4 py-3 
        placeholder-opacity-50 focus:outline-none border w-full"
        value={formDetails.message}
        onChange={(e) => onValueChange("message", e.target.value)}
        />
        {submitted ? <p className="text-green-600">Your Message has been sent!</p>: null}
        <button type="submit" className="bg-blue-500 text-white">Send</button>
       </form>
       </div>
    </section>
    ); 
};

export default Contact;