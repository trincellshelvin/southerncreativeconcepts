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
        <main className="container mx-auto py-16">
            <div className="mx-auto max-w-xl bg-white/10 p-8 rounded shadow-lg">
                <h1 className="text-3xl font-semibold">Schedule a Consultation</h1>
                <p className="mt-4 text-justify">
                    Whether you need a new website, app, AWS setup, or ongoing maintenance,
                    we’re here to guide you through every step. Fill out the form below and
                    we’ll contact you to discuss your project, address technical questions,
                    and simplify the process for non-technical clients.
                </p>
                <form onSubmit={handleSubmit} className="mt-6">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        required
                        placeholder="Name"
                        className="mb-4 block w-full rounded border-white bg-white p-2 text-gray-800"
                    />
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        name="phone"
                        inputMode="tel"
                        pattern="[0-9+\-()\s]{7,}"
                        placeholder="Phone"
                        className="mb-4 block w-full rounded border-white bg-white p-2 text-gray-800"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        placeholder="Email"
                        className="mb-4 block w-full rounded border-white bg-white p-2 text-gray-800"
                    />
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows={4}
                        placeholder="Project Details"
                        className="mb-4 block w-full rounded border-white bg-white p-2 text-gray-800"
                    />
                    <button
                        type="submit"
                        className="mt-4"
                    >
                        Contact Us
                    </button>
                </form>
                {status && <p className="mt-4 text-green-600">{status}</p>}
            </div>
        </main>
    );
}
