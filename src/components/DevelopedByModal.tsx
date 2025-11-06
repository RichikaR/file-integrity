import { User, GraduationCap } from 'lucide-react';

// Import images - make sure these filenames match exactly!
import professorImg from '../assets/images/professor.jpg';
import richikaImg from '../assets/images/richika.jpg';
import nandaniImg from '../assets/images/nandani.jpg';  // ← Fixed!



export default function DevelopedByModal() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">File Integrity Verification System</h3>
        <p className="text-gray-700">BCSE308L: Computer Networks Project</p>
        <p className="text-sm text-gray-600 mt-2">Academic Year 2024-2025</p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-blue-600" size={28} />
          <h4 className="text-xl font-bold text-gray-900">Guided by</h4>
        </div>

        <div className="flex items-center gap-6 bg-gray-50 rounded-lg p-4">
          {/* CHANGED: Added actual image instead of initials */}
          <img 
            src={professorImg} 
            alt="Dr. Swaminathan A" 
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-lg"
          />
          <div className="flex-1">
            <h5 className="text-lg font-bold text-gray-900">Dr. Swaminathan Annadurai </h5>
            <p>Assistant Professor at Vellore Institute of Technology (VIT), Chennai Campus.</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-green-600" size={28} />
          <h4 className="text-xl font-bold text-gray-900">Development Team</h4>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
            {/* CHANGED: Added Richika's photo */}
            <img 
              src={richikaImg} 
              alt="Richika Rani" 
              className="w-20 h-20 rounded-full object-cover border-4 border-green-300 shadow-lg"
            />
            <div className="flex-1">
              <h5 className="text-lg font-bold text-gray-900">Richika Rani</h5>
              <p className="text-green-700 font-semibold">24BCE1498</p>
              
            </div>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
            {/* CHANGED: Added Nandani's photo */}
            <img 
              src={nandaniImg} 
              alt="Nandani" 
              className="w-20 h-20 rounded-full object-cover border-4 border-purple-300 shadow-lg"
            />
            <div className="flex-1">
              <h5 className="text-lg font-bold text-gray-900">Nandani</h5>
              <p className="text-purple-700 font-semibold">24BCE1491</p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Project Overview</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Objective:</strong> To develop a web-based file integrity verification system that replicates
            traditional C-based cryptographic implementations using modern web technologies.
          </p>
          
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>SHA-256 and HMAC-SHA-256 cryptographic hashing</li>
            <li>Salt-based security enhancement</li>
            <li>Sender-Receiver verification workflow</li>
            <li>Direct file comparison capability</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-blue-900 font-semibold">
          This project demonstrates the practical application of cryptographic concepts
          in ensuring secure file transmission over computer networks.
        </p>
      </div>
    </div>
  );
}
