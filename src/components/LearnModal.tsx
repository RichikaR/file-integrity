import { Shield, Lock, Hash, Key } from 'lucide-react';
// Change .jpg to .png
import flowchartImg from '../assets/images/flowchart.png';

export default function LearnModal() {
  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mt-0 mb-4">What is File Integrity Verification?</h3>
          <p className="text-gray-700 leading-relaxed mb-0">
            File integrity verification ensures that a file has not been corrupted or tampered with during transmission or storage.
            This system uses cryptographic hashing techniques to create unique digital fingerprints of files that can be compared
            to verify authenticity and detect any modifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Hash className="text-blue-600" size={24} />
              <h4 className="text-lg font-bold text-gray-900 m-0">SHA-256 Algorithm</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Secure Hash Algorithm 256-bit</strong> is a cryptographic hash function that converts input data of any size
              into a fixed 256-bit (64 hexadecimal characters) hash value. Even a tiny change in the input produces a completely
              different hash output, making it ideal for detecting file modifications.
            </p>
            <div className="mt-3 bg-gray-50 p-3 rounded">
              <p className="text-xs font-mono text-gray-600 mb-1">Example:</p>
              <p className="text-xs font-mono text-gray-900 break-all">
                Input: "Hello World"<br />
                SHA-256: a591a6d40bf42...
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-green-600" size={24} />
              <h4 className="text-lg font-bold text-gray-900 m-0">HMAC-SHA-256</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Hash-based Message Authentication Code</strong> combines SHA-256 with a secret key to provide both
              integrity verification and authentication. This ensures that only parties with the correct secret key can
              generate or verify the hash, preventing unauthorized tampering.
            </p>
            <div className="mt-3 bg-gray-50 p-3 rounded">
              <p className="text-xs font-mono text-gray-600 mb-1">Formula:</p>
              <p className="text-xs font-mono text-gray-900">
                HMAC = SHA256(key + SHA256(data + salt))
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Key className="text-purple-600" size={24} />
              <h4 className="text-lg font-bold text-gray-900 m-0">Salt</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              A <strong>salt</strong> is random data added to the hash computation to ensure uniqueness. Even if two identical
              files are hashed, different salts produce different hash values. This prevents rainbow table attacks and adds an
              extra layer of security. In our system, a random 16-byte salt is generated for each file verification process.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-yellow-600" size={24} />
              <h4 className="text-lg font-bold text-gray-900 m-0">How It Works</h4>
            </div>
            <ol className="text-sm text-gray-700 space-y-2 ml-4">
              <li><strong>Sender Side:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Upload original file</li>
                  <li>• System computes SHA-256 hash of file content</li>
                  <li>• Random 16-byte salt is generated</li>
                  <li>• HMAC-SHA-256 is computed using hash + salt</li>
                  <li>• First 16 characters become verification code</li>
                  <li>• Share code and salt with receiver</li>
                </ul>
              </li>
              <li><strong>Receiver Side:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Upload received file</li>
                  <li>• Enter verification code and salt from sender</li>
                  <li>• System computes SHA-256 hash of received file</li>
                  <li>• HMAC is recomputed with provided salt</li>
                  <li>• Timing-safe comparison of codes</li>
                  <li>• Match = File intact ✓ | Mismatch = Corrupted ✗</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* REPLACED: Flowchart Image Section */}
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">System Flow Diagram</h4>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-300">
            <img 
              src={flowchartImg} 
              alt="File Integrity Verification System Flow Diagram" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center italic">
            Complete workflow showing Sender Mode, Receiver Mode, and Comparison Mode
          </p>
        </div>

        
      </div>
    </div>
  );
}
