export default function AboutPage() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="mt-4 text-gray-700">
                This is the About page.
            </p>
            <section className="mt-6">
                <h2 className="text-xl font-semibold">Our Mission</h2>
                <p className="mt-2 text-gray-600">
                    Our mission is to provide high-quality services and products that
                    bring real value to our customers.
                </p>
            </section>
            <section className="mt-6">
                <h2 className="text-xl font-semibold">Our Team</h2>
                <p className="mt-2 text-gray-600">
                    We are a passionate team of developers, designers, and innovators
                    dedicated to creating impactful solutions.
                </p>
            </section>
        </div>
    );
}
