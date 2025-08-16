import Hero from '../../../components/Hero'

export const metadata = { title: 'Code of Conduct — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      <Hero
        title="Code of Conduct"
        subtitle="We are committed to a welcoming, safe, and respectful workshop for everyone."
        variant="roseFuchsia"
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Pledge</h2>
            <p className="text-gray-700">
              The Child Speech AI Workshop is dedicated to providing a harassment‑free experience for participants regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, sexual identity and orientation, or technology choices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Expected Behavior</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Be respectful, considerate, and collaborative.</li>
              <li>Use inclusive language; be mindful of power dynamics.</li>
              <li>Gracefully accept constructive feedback.</li>
              <li>Follow instructions from event staff and venue policies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Unacceptable Behavior</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Harassment, intimidation, or discrimination of any kind.</li>
              <li>Offensive verbal comments or imagery; deliberate intimidation or stalking.</li>
              <li>Disruptive behavior during talks or activities.</li>
              <li>Unwanted photography/recording of individuals, or sustained disruption.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Reporting</h2>
            <p className="text-gray-700">
              If you experience or witness a violation, contact the organizers at
              {' '}<a href="mailto:organizers@childspeechai.org" className="text-orange-700 underline">organizers@childspeechai.org</a> or speak to a staff member on site. All reports will be handled promptly and confidentially.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Enforcement</h2>
            <p className="text-gray-700">
              Participants asked to stop any unacceptable behavior are expected to comply immediately. Organizers may take appropriate action, including verbal warnings, removal from the event without refund, or contacting venue/security.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              Attribution: Adapted from established community CoCs (e.g., Contributor Covenant) and academic event best practices.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

