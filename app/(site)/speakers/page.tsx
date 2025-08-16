export const metadata = { title: 'Speakers — Child Speech AI Workshop' }

const speakers = [
  { 
    name: 'Dr. Jinjun Xiong', 
    affiliation: 'IBM Research and Columbia University',
    role: 'General Chair',
    image: '/images/speakers/20240212_JinjunXiong.png',
    bio: 'Leading researcher in child speech recognition and multimodal AI systems.',
    slug: 'jinjun-xiong'
  },
  { 
    name: 'Prof. Sarah Chen', 
    affiliation: 'Stanford University Department of Linguistics',
    role: 'Program Chair',
    image: '/images/speakers/20240212_JinjunXiong.png',
    bio: 'Expert in speech disorders and assistive technologies for children.',
    slug: 'sarah-chen'
  },
  { 
    name: 'Dr. Yuki Tanaka', 
    affiliation: 'University of Tokyo Speech Processing Lab',
    role: 'Technical Chair',
    image: '/images/speakers/20240212_JinjunXiong.png',
    bio: 'Specialist in cross-linguistic speech processing and fairness in AI.',
    slug: 'yuki-tanaka'
  },
]

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">General Chairs</h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Meet our distinguished panel of experts leading the Child Speech AI Workshop 2025
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {speakers.map(speaker => (
              <div key={speaker.slug} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Speaker Image */}
                <div className="relative">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {speaker.role}
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{speaker.affiliation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{speaker.bio}</p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Speakers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Technical Areas</h2>
            <p className="text-xl text-gray-600">Towards the New Era of Spoken Language Understanding Systems utilizing LLMs</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Automatic Speech Recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Spoken Language Processing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speech Enhancement and Separation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speaker and Language Recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speaker Diarization</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Multi-lingual Speech Processing</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Multimodal Processing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Emotion Recognition and Paralinguistics</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speech Synthesis and Spoken Language Generation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Machine Learning for Speech Applications</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Large Language Models for Speech</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speech Foundation Models</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}