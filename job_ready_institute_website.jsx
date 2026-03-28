import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function JobReadyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">JobReady Institute</h1>
        <Button className="bg-white text-blue-600">Enroll Now</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Get Trained. Get Confident. Get Hired.</h2>
        <p className="text-lg mb-6">
          BPO Training | Spoken English | GDS | Computer Basics
        </p>
        <Button className="bg-blue-600 text-white px-6 py-2">Start Your Career</Button>
      </section>

      {/* Courses Section */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Spoken English</h3>
            <p>Improve fluency, confidence, and communication skills.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">GDS Training</h3>
            <p>Learn Amadeus, ticketing, and PNR creation.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Computer Basics</h3>
            <p>Master MS Office, internet, and essential computer skills.</p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">Practical Training</h4>
            <p>Real-world skills, not just theory.</p>
          </div>
          <div>
            <h4 className="font-semibold">Interview Preparation</h4>
            <p>Mock interviews and confidence building.</p>
          </div>
          <div>
            <h4 className="font-semibold">Placement Support</h4>
            <p>Guidance until you get hired.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>📞 7501940370 / 8826170363</p>
        <p>📍 Delhi</p>
        <div className="mt-4 flex gap-4 justify-center">
          <a href="https://wa.me/917501940370" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 text-white">Chat on WhatsApp</Button>
          </a>
          <a href="https://wa.me/918826170363" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-600 text-white">WhatsApp (Alt)</Button>
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917501940370"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-105 transition"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current">
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.2 31.8l8.1-2.1c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.8 1.2 1.3-4.7-.3-.5C4 20.7 3.3 18.4 3.3 16 3.3 8.8 8.8 3.3 16 3.3S28.7 8.8 28.7 16 23.2 28.8 16 28.8zm7.3-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.2.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3 0 1.7 1.3 3.4 1.5 3.6.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 JobReady Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}
