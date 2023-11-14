import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Canvas } from "@react-three/fiber";
import Fox from "../../models/Fox";
import Loader from "../../components/Loader";
import useAlert from "../../hooks/useAlert";
import Alert from "../../components/Alert";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, hideAlert, showAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    const promise = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "George",
        from_email: form.email,
        to_email: "xsova113@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    toast.promise(promise, {
      loading: "Sending...",
      success: "Message sent!",
      error: (e) => {
        setCurrentAnimation("idle");
        e.message;
      },
      finally: () => {
        setIsLoading(false);
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setCurrentAnimation("idle");
        }, 3000);
      },
    });
  };

  return (
    <section className="max-container relative flex flex-col lg:flex-row h-screen">
      {alert.show && <Alert {...alert} />}
      <div className="min-w-1/2 flex flex-1 flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-14 flex w-full flex-col gap-7"
          ref={formRef}
        >
          <label className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="font-semibold text-black-500">
            Your Message
            <textarea
              name="message"
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="h-[350px] w-full md:h-[550px] lg:h-auto lg:w-1/2">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <pointLight />
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
