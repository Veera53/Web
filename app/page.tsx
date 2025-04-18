import Link from "next/link"
import Image from "next/image"
import { MapPin, Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 md:p-16 lg:p-24 font-mono">
      <nav className="mb-16">
        <div className="text-gray-400">
                                press:{" "}
          <Link href="/" className="text-white hover:underline">
                               [h]home
          </Link>{" "}
          <Link href="/blog" className="text-white hover:underline">
                                [b]blog
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Veera Peddinti</h1>

        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            <span>Visakhapatnam, IND</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-gray-400" />
            <span>GST, GITAM</span>
          </div>
        </div>

        <div className="mb-16 leading-relaxed">
          <p>
            Currently I'm UG student at GITAM University, Visakhapatnam. 
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-red-500">*</span> links
          </h2>
          <div className="space-x-4">
            <Link href="mailto:peddintiveerabhaireddy@gmail.com" className="text-gray-400 hover:text-white">
              email
            </Link>
            <Link href="https://github.com/Veera53" className="text-gray-400 hover:text-white">
              github
            </Link>
            <Link href="https://www.linkedin.com/in/veerapeddinti/" className="text-gray-400 hover:text-white">
              linkedin
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-red-500">*</span> Project
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-96 h-50 relative">
              <Image
                src="/MappingVideo.gif"
                alt="HectorSlam"
                fill
                
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">AtlasPi</h3>
              <p className="text-gray-400 mb-2">Centre for Autonomous Systems(August'24 - January'25)</p>
              <p>
              Developed a lightweight indoor SLAM system using a Raspberry Pi and LIDAR. Integrated Hector SLAM for real-time 2D mapping, combining wheel odometry, IMU data, and LIDAR through the robot_pose_ekf package for sensor fusion and accurate pose estimation. 
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
