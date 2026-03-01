"use client";

import { useState } from "react";

export default function Consultation() {
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, email, details }),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('Thank you! Your request was sent.');
                setName(''); setPhone(''); setEmail(''); setDetails('');
            } else {
                setStatus(data?.error || 'Failed to send.');
            }
        } catch (err) {
            console.error(err);
            setStatus('Error sending request.');
        }
    }

    return (
        <main role="main" className="container mx-auto py-16">
            <div className="mx-auto max-w-xl bg-white/10 p-8 rounded shadow-lg">
                <h1 className="text-3xl font-semibold">Schedule a Consultation</h1>
                <p className="mt-4 text-justify">
                    Whether you need a new website, app, AWS setup, or ongoing maintenance,
                    we’re here to guide you through every step. Fill out the form below and
                    we’ll contact you to discuss your project, address technical questions,
                    and simplify the process for non-technical clients.
                </p>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-6">
                        <label htmlFor="name" className="block font-semibold mb-2">
                            Name <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            required
                            aria-required="true"
                            className="w-full rounded border-2 border-white bg-white p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block font-semibold mb-2">
                            Phone
                        </label>
                        <input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            inputMode="tel"
                            pattern="[0-9+\-()\s]{7,}"
                            aria-describedby="phone-help"
                            className="w-full rounded border-2 border-white bg-white p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                        <p id="phone-help" className="mt-1 text-sm text-gray-300">
                            At least 7 digits (optional)
                        </p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block font-semibold mb-2">
                            Email <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            aria-required="true"
                            className="w-full rounded border-2 border-white bg-white p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="details" className="block font-semibold mb-2">
                            Project Details
                        </label>
                        <textarea
                            id="details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            rows={4}
                            className="w-full rounded border-2 border-white bg-white p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full"
                    >
                        Contact Us
                    </button>
                </form>
                {status && (
                    <div 
                        role="alert" 
                        aria-live="polite" 
                        className={`mt-4 p-3 rounded text-center font-semibold ${
                            status.includes('Thank you') || status.includes('sent')
                                ? 'bg-green-600/20 text-green-200'
                                : status === 'Sending...'
                                ? 'bg-blue-600/20 text-blue-200'
                                : 'bg-red-600/20 text-red-200'
                        }`}
                    >
                        {status}
                    </div>
                )}
            </div>
        </main>
    );
}
