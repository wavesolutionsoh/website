"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormConfig = {
  fields: readonly {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
  }[];
  submitLabel: string;
  providerMode: string;
};

type LeadFormProps = {
  config: FormConfig;
};

type SubmitState = "idle" | "submitting" | "submitted" | "error";

export function LeadForm({ config }: LeadFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState<string>("");

  return (
    <form
      className="bg-[#f5f7fb] p-6 shadow-[0_24px_70px_rgba(16,32,51,0.13)] md:p-9"
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitState("submitting");
        setMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
          const response = await fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const result = (await response.json()) as { message?: string };

          if (!response.ok) {
            throw new Error(result.message ?? "Something went wrong. Please try again.");
          }

          setSubmitState("submitted");
          setMessage(result.message ?? "Thanks. Wave will follow up soon.");
          form.reset();
        } catch (error) {
          setSubmitState("error");
          setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {config.fields.map((field) => (
          <label key={field.name} className={field.type === "textarea" ? "md:col-span-2" : undefined}>
            <span className="mb-2 block text-sm font-extrabold text-[#062A60]">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={5}
                className="min-h-36 w-full border border-[#cfd9e4] bg-white px-4 py-3 text-sm text-[#102033] outline-none transition placeholder:text-[#7b8894] focus:border-[#0077C8] focus:ring-4 focus:ring-[#0077C8]/15"
              />
            ) : (
              <input
                name={field.name}
                required={field.required}
                type={field.type}
                placeholder={field.placeholder}
                className="min-h-12 w-full border border-[#cfd9e4] bg-white px-4 py-3 text-sm text-[#102033] outline-none transition placeholder:text-[#7b8894] focus:border-[#0077C8] focus:ring-4 focus:ring-[#0077C8]/15"
              />
            )}
          </label>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#F58220] px-7 font-extrabold text-white transition hover:bg-[#cf690d]"
        >
          {submitState === "submitting" ? "Sending..." : config.submitLabel}
          <Send className="h-4 w-4" />
        </button>
        <p className="text-xs font-semibold leading-5 text-[#5c6875]">{config.providerMode}</p>
      </div>

      {submitState === "submitted" || submitState === "error" ? (
        <div className={`mt-6 border-l-4 bg-white p-4 text-sm font-semibold leading-6 text-[#102033] ${submitState === "error" ? "border-red-600" : "border-[#0077C8]"}`}>
          {message}
        </div>
      ) : null}
    </form>
  );
}
