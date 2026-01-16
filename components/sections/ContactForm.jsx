"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message || "Message sent successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const onError = () => {
    toast.error("Please fill all required fields");
  };

  return (
    <form
      className="contact-form-validated contact-one__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="row">
        {/* Name */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <h4 className="contact-one__input-title">Full Name</h4>
          <div className="contact-one__input-box">
            <input
              type="text"
              placeholder="Thomas Alison"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <h4 className="contact-one__input-title">Email Address</h4>
          <div className="contact-one__input-box">
            <input
              type="email"
              placeholder="thomas@domain.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <h4 className="contact-one__input-title">Phone Number</h4>
          <div className="contact-one__input-box">
            <input
              type="text"
              placeholder="+12 (00) 123 4567 890"
              {...register("phone", {
                minLength: {
                  value: 10,
                  message: "Minimum 10 digits required",
                },
              })}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <h4 className="contact-one__input-title">Subject</h4>
          <div className="contact-one__input-box">
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <small className="text-danger">{errors.subject.message}</small>
            )}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="col-xl-12">
        <h4 className="contact-one__input-title">Inquiry about</h4>
        <div className="contact-one__input-box">
          <textarea
            placeholder="Write your message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.message && (
            <small className="text-danger">{errors.message.message}</small>
          )}
        </div>

        <div className="contact-one__btn-box">
          <button type="submit" className="thm-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
