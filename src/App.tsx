/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Info, 
  User, 
  MessageSquare, 
  Sparkles, 
  Heart, 
  Lightbulb, 
  Star, 
  SendHorizonal,
  CheckCircle2,
  RefreshCcw,
  Loader2
} from "lucide-react";

const questions = [
  {
    id: "q1",
    question: "Dalam situasi krisis, tipe kepemimpinan mana yang paling menggambarkan dirimu?",
    options: [
      { id: "A", text: "Memprioritaskan diskusi dan harmoni tim sebelum bertindak." },
      { id: "B", text: "Fokus pada perencanaan strategis dan delegasi tugas." },
      { id: "C", text: "Mengambil inisiatif cepat dan memimpin di garis depan." },
      { id: "D", text: "Memberikan dukungan moral dan memantau dari belakang." }
    ]
  },
  {
    id: "q2",
    question: "Bagaimana reaksimu terhadap ide baru yang sangat berbeda dari biasanya?",
    options: [
      { id: "A", text: "Sangat menyukai tantangan dan ingin segera mencobanya." },
      { id: "B", text: "Menganalisis risiko dan manfaatnya terlebih dahulu." },
      { id: "C", text: "Mengajaknya ke dalam forum untuk mencapai mufakat." },
      { id: "D", text: "Mendukung ide tersebut jika selaras dengan nilai MPK." }
    ]
  },
  {
    id: "q3",
    question: "Pandanganmu terhadap kesuksesan sebuah program kerja adalah...",
    options: [
      { id: "A", text: "Tercapainya target bersama dengan suasana kekeluargaan." },
      { id: "B", text: "Adanya proses pembelajaran bagi setiap anggota pelaksana." },
      { id: "C", text: "Eksekusi yang profesional dengan efisiensi tinggi." },
      { id: "D", text: "Adanya dampak positif yang berkelanjutan bagi sekolah." }
    ]
  },
  {
    id: "q4",
    question: "Bagaimana cara terbaik menurutmu untuk memotivasi anggota yang mulai pasif?",
    options: [
      { id: "A", text: "Melakukan pendekatan personal dari hati ke hati." },
      { id: "B", text: "Memberikan tantangan baru yang sesuai minatnya." },
      { id: "C", text: "Mengingatkan kembali tujuan awal masuk organisasi." },
      { id: "D", text: "Melakukan evaluasi bersama dalam forum formal." }
    ]
  },
  {
    id: "q5",
    question: "Apa yang kamu lakukan jika melihat ada kebijakan organisasi yang dirasa kurang tepat?",
    options: [
      { id: "A", text: "Menyampaikan kritik konstruktif melalui jalur resmi." },
      { id: "B", text: "Mencoba memahami latar belakang kebijakan tersebut lebih dalam." },
      { id: "C", text: "Mengajak rekan lain untuk berdiskusi mencari solusi alternatif." },
      { id: "D", text: "Tetap menjalankan sambil menunggu waktu evaluasi tiba." }
    ]
  },
  {
    id: "q6",
    question: "Bagaimana sikapmu saat program kerja yang kamu susun tidak disetujui forum?",
    options: [
      { id: "A", text: "Menerima masukan forum dan memperbaiki konsepnya." },
      { id: "B", text: "Meminta penjelasan mendalam untuk bahan evaluasi diri." },
      { id: "C", text: "Menawarkan diri untuk membantu program kerja lain yang terpilih." },
      { id: "D", text: "Tetap mendukung keputusan mufakat demi kesolidan tim." }
    ]
  },
  {
    id: "q7",
    question: "Menurutmu, kualitas terpenting yang harus dimiliki anggota MPK adalah...",
    options: [
      { id: "A", text: "Integritas tinggi dalam menjalankan setiap tugas." },
      { id: "B", text: "Kemampuan berkomunikasi dan menjalin relasi." },
      { id: "C", text: "Kreativitas dalam melahirkan ide-ide baru." },
      { id: "D", text: "Ketahanan dan dedikasi dalam bekerja keras." }
    ]
  },
  {
    id: "q8",
    question: "Bagaimana caramu menjaga keseimbangan antara sekolah dan organisasi?",
    options: [
      { id: "A", text: "Membuat skala prioritas harian yang sangat ketat." },
      { id: "B", text: "Selalu mengedepankan tugas akademik di atas segalanya." },
      { id: "C", text: "Mencoba menerapkan manajemen waktu yang fleksibel." },
      { id: "D", text: "Minta bantuan/koordinasi tim saat jadwal sedang padat." }
    ]
  }
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xrejokrd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Terjadi kesalahan saat mengirim. Silakan coba lagi.");
      }
    } catch (err) {
      alert("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#FDFCF8]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 md:p-20 rounded-[50px] shadow-2xl shadow-[#6366f1]/5 border border-gray-50 max-w-3xl w-full text-center space-y-12"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-50 rounded-full scale-150 opacity-40 animate-pulse"></div>
              <div className="absolute inset-0 bg-emerald-50 rounded-full scale-125 opacity-60"></div>
              <div className="relative w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center border-4 border-white shadow-sm">
                <CheckCircle2 className="text-emerald-500" size={48} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-black text-gray-800 tracking-tight">Aspirasi Terkirim!</h2>
            <p className="italic text-gray-500 font-medium leading-relaxed text-lg max-w-2xl mx-auto">
              "Terima kasih atas keberanianmu untuk bersuara. Kejujuranmu adalah bahan bakar utama bagi perkembangan MPK yang lebih harmonis."
            </p>
          </div>

          <div className="pt-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReset}
              className="w-full bg-[#6366f1] text-white py-6 rounded-3xl font-bold shadow-xl shadow-indigo-100 hover:shadow-indigo-200 transition-all text-xl flex items-center justify-center gap-3"
            >
              Kirim Tanggapan Lain
            </motion.button>
          </div>

          <p className="text-sm text-gray-400 font-medium">
            Identitas Anda tetap 100% rahasia.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center space-y-6">
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            src="src/assets/mpk.png" 
            alt="Logo MPK" 
            className="w-32 h-32 object-contain"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#F0F4FF] text-[#6366f1] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider"
          >
            <ShieldCheck size={14} />
            PROTECTED ANONYMOUS PORTAL
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Evaluasi & Aspirasi MPK
            </h1>
            <p className="max-w-xl mx-auto text-gray-500 font-medium">
              Wadah kolaborasi pemikiran untuk transformasi organisasi yang lebih objektif dan inklusif.
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Important Notes Section */}
          <section className="bg-[#F0F7FF] border border-[#D1E9FF] p-6 md:p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-[#4A5568] font-bold">
              <Info size={20} className="text-[#6366f1]" />
              <span className="text-sm">CATATAN PENTING</span>
            </div>
            <ul className="space-y-3 text-sm text-[#4A5568] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#6366f1] select-none">•</span>
                <p>Survey ini bersifat <span className="font-bold">100% ANONIM</span>. Kami tidak merekam data pribadi, email, atau IP Anda.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#6366f1] select-none">•</span>
                <p><span className="font-bold">Pesan khusus untuk adik-adik kelas:</span> Tidak perlu menggunakan kata sapaan "Ka" atau "Kakak" dalam mengisi form agar identitas dan gaya bicara Anda tetap terjaga kerahasiaannya.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#6366f1] select-none">•</span>
                <p>Isilah form ini sejujur-jujurnya tanpa takut disudutkan, karena jawaban Anda murni digunakan untuk evaluasi dan pengembangan organisasi secara objektif.</p>
              </li>
            </ul>
          </section>

          {/* Section 1: Survey Section */}
          <section className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center gap-3">
              <User size={20} className="text-[#6366f1]" />
              <h2 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">
                01. SURVEY KARAKTER & KEPEMIMPINAN
              </h2>
            </div>
            
            <div className="p-6 md:p-10 space-y-12">
              {questions.map((q, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="font-bold text-gray-800 leading-tight">
                    {q.question}
                  </h3>
                  <div className="grid gap-3">
                    {q.options.map((opt) => (
                      <label key={opt.id} className="relative group cursor-pointer">
                        <input 
                          type="radio" 
                          name={q.id} 
                          value={opt.text} 
                          className="peer sr-only"
                          required
                        />
                        <div className="flex items-center gap-4 p-5 rounded-[22px] border border-gray-100 bg-[#FBFBFA]/40 transition-all duration-300 peer-checked:border-[#6366f1]/40 peer-checked:bg-white peer-checked:ring-4 peer-checked:ring-[#6366f1]/5 group-hover:bg-gray-100/50">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-[11px] font-bold text-[#6366f1] transition-all peer-checked:group-[]:bg-[#6366f1] peer-checked:group-[]:text-white peer-checked:group-[]:border-[#6366f1] shadow-sm">
                            {opt.id}
                          </div>
                          <span className="text-sm font-medium text-gray-600 peer-checked:group-[]:text-gray-900 peer-checked:group-[]:font-bold leading-relaxed">
                            {opt.text}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Problem Solving */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                <h2 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">
                  01 LOGIKA ORGANISASI: KONFLIK INTERNAL
                </h2>
                <Sparkles size={18} className="text-yellow-400 opacity-60" />
              </div>
              <p className="font-bold text-gray-800">
                Bagaimana caramu menangani konflik internal divisi yang menghambat koordinasi?
              </p>
              <textarea 
                name="konflik_internal"
                placeholder="Tuliskan analisis dan langkah solutifmu..."
                className="w-full min-h-[160px] p-6 rounded-3xl bg-[#F9FAFB]/50 border border-transparent focus:bg-white focus:border-[#6366f1]/30 focus:ring-4 focus:ring-[#6366f1]/5 outline-none transition-all text-sm leading-relaxed"
                required
              />
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                <h2 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">
                  02 KEPEMIMPINAN: JENUH & PASIF
                </h2>
                <Heart size={18} className="text-pink-400 opacity-60" />
              </div>
              <p className="font-bold text-gray-800">
                Bagaimana caramu meningkatkan partisipasi anggota yang mulai merasa jenuh atau pasif?
              </p>
              <textarea 
                name="anggota_jenuh"
                placeholder="Langkah strategis untuk membangkitkan semangat tim..."
                className="w-full min-h-[160px] p-6 rounded-3xl bg-[#F9FAFB]/50 border border-transparent focus:bg-white focus:border-[#6366f1]/30 focus:ring-4 focus:ring-[#6366f1]/5 outline-none transition-all text-sm leading-relaxed"
                required
              />
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                <h2 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">
                  03 TEKANAN: PENGAMBILAN KEPUTUSAN
                </h2>
                <Lightbulb size={18} className="text-yellow-500 opacity-60" />
              </div>
              <p className="font-bold text-gray-800">
                Bagaimana strategi logismu dalam mengambil keputusan krusial saat berada di bawah tekanan waktu?
              </p>
              <textarea 
                name="keputusan_krusiil"
                placeholder="Jelaskan mekanisme berpikirmu dalam situasi darurat..."
                className="w-full min-h-[160px] p-6 rounded-3xl bg-[#F9FAFB]/50 border border-transparent focus:bg-white focus:border-[#6366f1]/30 focus:ring-4 focus:ring-[#6366f1]/5 outline-none transition-all text-sm leading-relaxed"
                required
              />
            </div>
          </div>

          {/* Section 3: Feedback */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
                <MessageSquare size={18} className="text-[#6366f1]" />
                <h2 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">
                  KESAN & PESAN MPK
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-500 font-medium">
                  Berikan feedback objektif mengenai perjalanan organisasi secara umum selama periode ini.
                </p>
                <textarea 
                  name="kesan_pesan_umum"
                  placeholder="Apa yang perlu dipertahankan dan apa yang harus dievaluasi dari MPK?"
                  className="w-full min-h-[160px] p-6 rounded-3xl bg-[#F9FAFB]/50 border border-transparent focus:bg-white focus:border-[#6366f1]/30 focus:ring-4 focus:ring-[#6366f1]/5 outline-none transition-all text-sm leading-relaxed"
                  required
                />
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
                <Star size={18} className="text-[#6366f1]" />
                <h2 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">
                  PERSONAL NOTE: KETUA MPK
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-500 font-medium">
                  Berikan pesan atau kritik personal yang membangun langsung untuk Ketua MPK.
                </p>
                <textarea 
                  name="personal_note_ketua"
                  placeholder="Jujurlah, masukanmu adalah nutrisi untuk pertumbuhan kepemimpinannya..."
                  className="w-full min-h-[160px] p-6 rounded-3xl bg-[#F9FAFB]/50 border border-transparent focus:bg-white focus:border-[#6366f1]/30 focus:ring-4 focus:ring-[#6366f1]/5 outline-none transition-all text-sm leading-relaxed"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center pt-8 space-y-8">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="flex items-center gap-3 bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white px-10 py-5 rounded-full font-bold shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  Kirim Aspirasi Anonim
                  <SendHorizonal size={20} />
                </>
              )}
            </motion.button>

            <footer className="text-center space-y-2">
              <p className="text-[10px] text-gray-400 font-medium tracking-wide">
                © 2025/2026 Majelis Perwakilan Kelas. Protected with end-to-end anonymity.
              </p>
              <p className="text-[10px] font-bold tracking-widest text-[#6366f1] uppercase">
                ORIGINAL BY: OSTERIA STUDENT REPRESENTATIVE LEADER
              </p>
            </footer>
          </div>
        </form>
      </div>
    </div>
  );
}

