"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Terminal,
  ChevronRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentField, setCurrentField] = useState<string | null>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setCurrentField(fieldName);
  };

  const handleBlur = () => {
    setCurrentField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            $ get_in_touch.sh
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            # Have a question or want to work with us? Send us a message and
            we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="bg-card/80 rounded-lg border border-primary/20 overflow-hidden shadow-md">
              <div className="flex items-center bg-muted px-4 py-2 border-b border-primary/20">
                <Terminal className="h-4 w-4 mr-2 text-primary" />
                <span className="font-mono text-sm">
                  night-owls-terminal -- contact.sh
                </span>
              </div>
              <form onSubmit={handleSubmit} className="p-6 font-mono space-y-6">
                <div>
                  <div className="flex items-center text-foreground mb-2">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <label htmlFor="name" className="text-sm">
                      NAME=
                    </label>
                  </div>
                  <div className="flex items-center bg-muted/50 border border-input rounded px-3 py-2">
                    <span className="text-primary">$</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      required
                      className="w-full bg-transparent border-none focus:outline-none text-foreground ml-2 font-mono"
                      placeholder="your_name"
                    />
                    {currentField === "name" && cursorVisible && (
                      <span className="h-5 w-2 bg-primary animate-pulse"></span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-foreground mb-2">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <label htmlFor="email" className="text-sm">
                      EMAIL=
                    </label>
                  </div>
                  <div className="flex items-center bg-muted/50 border border-input rounded px-3 py-2">
                    <span className="text-primary">$</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      required
                      className="w-full bg-transparent border-none focus:outline-none text-foreground ml-2 font-mono"
                      placeholder="your@email.com"
                    />
                    {currentField === "email" && cursorVisible && (
                      <span className="h-5 w-2 bg-primary animate-pulse"></span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-foreground mb-2">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <label htmlFor="message" className="text-sm">
                      MESSAGE=
                    </label>
                  </div>
                  <div className="flex bg-muted/50 border border-input rounded px-3 py-2">
                    <span className="text-primary mt-0.5">$</span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      className="w-full bg-transparent border-none focus:outline-none text-foreground ml-2 font-mono"
                      placeholder="Type your message here..."
                    ></textarea>
                    {currentField === "message" && cursorVisible && (
                      <span className="h-5 w-2 bg-primary animate-pulse"></span>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-10 items-center justify-center rounded bg-primary px-6 font-mono text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                  >
                    {isSubmitting ? "sending..." : "./submit.sh"}
                  </button>
                </div>
                {submitSuccess && (
                  <div className="text-foreground mt-2 font-mono">
                    <span className="text-primary">{">"}</span> Message sent
                    successfully!{" "}
                    <span
                      className={cursorVisible ? "opacity-100" : "opacity-0"}
                    >
                      _
                    </span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="bg-card/80 p-8 rounded-lg border border-primary/20 shadow-md">
              <h3 className="text-xl font-bold mb-4 font-mono text-foreground flex items-center">
                <span className="text-primary mr-2">$</span> cat
                contact_info.txt
              </h3>
              <p className="text-muted-foreground mb-6 font-mono">
                # Feel free to reach out to us through any of the following
                channels. We're always open to new opportunities and
                collaborations.
              </p>
              <div className="space-y-4 font-mono">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a
                    href="mailto:nightowls@tuta.io"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    nightowls@tuta.io
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4 font-mono text-foreground flex items-center">
                <span className="text-primary mr-2">$</span> cat
                social_links.txt
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nightowls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full border border-primary/20 hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5 text-foreground" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/nightowls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full border border-primary/20 hover:bg-accent transition-colors"
                >
                  <Twitter className="h-5 w-5 text-foreground" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com/company/nightowls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full border border-primary/20 hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/nightowls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full border border-primary/20 hover:bg-accent transition-colors"
                >
                  <Instagram className="h-5 w-5 text-foreground" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
