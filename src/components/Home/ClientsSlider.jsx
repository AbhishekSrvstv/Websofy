import React, { useState, useEffect, useRef } from "react";
import "./ClientsSlider.css";

import LucknowAcademy from "../../assets/ClientSlide_img/LucknowAcademy.jpg";
import RichaAir from "../../assets/ClientSlide_img/RichaAir.jpg";
import RameetSolution from "../../assets/ClientSlide_img/RameetSolution.jpg";
import Stintwol from "../../assets/ClientSlide_img/Stintwol.jpg";
import SpanStructure from "../../assets/ClientSlide_img/SpanStructure.jpg";
import Windoor from "../../assets/ClientSlide_img/Windoor.jpg";
import GyanScientific from "../../assets/ClientSlide_img/GyanScientific.jpg";
import MedoxHospital from "../../assets/ClientSlide_img/MedoxHospital.jpg";
import SanskritSansthanam from "../../assets/ClientSlide_img/SanskritSansthanam.jpg";
import DrDivyanshu from "../../assets/ClientSlide_img/DrDivyanshu.jpg";
import PawanKumar from "../../assets/ClientSlide_img/PawanKumar.jpg";
import FetalHeart from "../../assets/ClientSlide_img/Fetal&Heart.jpg";
import BandaPolice from "../../assets/ClientSlide_img/BandaPolice.jpg";
import SKVAcademy from "../../assets/ClientSlide_img/SKVAcademy.jpg";
import VidyantHindu from "../../assets/ClientSlide_img/VidyantHindu.jpg";
import CurryHut from "../../assets/ClientSlide_img/CurryHut.jpg";
import NewGenesis from "../../assets/ClientSlide_img/NewGenesis.jpg";
import RTCMoradabad from "../../assets/ClientSlide_img/RTCMoradabad.jpg";
import PoliceCommissionerate from "../../assets/ClientSlide_img/PoliceComissionerate.jpg";
import UpMukhyamantri from "../../assets/ClientSlide_img/UpMukhyamantri.jpg";
import Economics from "../../assets/ClientSlide_img/Economics.jpg";
import MedoxDental from "../../assets/ClientSlide_img/MedoxDental.jpg";
import ExpreeIn from "../../assets/ClientSlide_img/ExpreeIn.jpg";
import Sparsh from "../../assets/ClientSlide_img/Sparsh.jpg";
import SoultIt from "../../assets/ClientSlide_img/SoultIt.jpg";
import ElectionDutyManagement from "../../assets/ClientSlide_img/ElectionDutyManagement.jpg";
import AligarhPolice from "../../assets/ClientSlide_img/AligarhPolice.jpg";


export const clients = [
  { name: "Lucknow Academy of Pediatrics", type: "Private", image: LucknowAcademy },
  { name: "Richa Air International", type: "Private", image: RichaAir },
  { name: "Rameet Solution Pvt. Ltd.", type: "Private", image: RameetSolution },
  { name: "Stinwol | Online English Speaking Course", type: "Private", image: Stintwol },
  { name: "Span Structures", type: "Private", image: SpanStructure },
  { name: "Windoor", type: "Private", image: Windoor },
  { name: "Gyan Scientific Traders", type: "Private", image: GyanScientific },
  { name: "Medox Hospital", type: "Private", image: MedoxHospital },
  { name: "Sanskrit Sansthanam", type: "Private", image: SanskritSansthanam },
  { name: "Dr Divyanshu", type: "Private", image: DrDivyanshu },
  { name: "Pawan Kumar IAS", type: "Private", image: PawanKumar },
  { name: "Fetal & Heart Care", type: "Private", image: FetalHeart },
  { name: "Banda Police", type: "Government", image: BandaPolice },
  { name: "SKV Academy", type: "Private", image: SKVAcademy },
  { name: "Vidhyant Hindu PG College", type: "Government", image: VidyantHindu },
  { name: "Aligarh Police", type: "Government", image: AligarhPolice },
  { name: "Curry Hut Indian Restaurant", type: "Private", image: CurryHut },
  { name: "New Genesis", type: "Private", image: NewGenesis },
  { name: "RTC Moradabad", type: "Government", image: RTCMoradabad },
  { name: "Police Commissionerate Lucknow", type: "Government", image: PoliceCommissionerate },
  { name: "UP Mukhyamantri Samuhik Vivah Yojna", type: "Government", image: UpMukhyamantri },
  { name: "Economic Offences Wing", type: "Government", image: Economics },
  { name: "Medox Dental Clinic", type: "Private", image: MedoxDental },
  { name: "Express INN Hotel & Restaurant", type: "Private", image: ExpreeIn },
  { name: "Sparsh", type: "Private", image: Sparsh },
  { name: "Soul IT", type: "Private", image: SoultIt },
  { name: "Election Duty Management", type: "Government", image: ElectionDutyManagement },
];

const GAP = 24;

const ClientsSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(3);
  const [cardW, setCardW] = useState(340);
  const viewRef = useRef(null);

  // ek page mein 3 card (tablet par 2, mobile par 1) aur card ki width
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      const v = vw >= 900 ? 3 : vw >= 600 ? 2 : 1;
      const w = viewRef.current ? viewRef.current.offsetWidth : 0;
      setVisible(v);
      if (w) setCardW((w - GAP * (v - 1)) / v);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, clients.length - visible);
  const current = Math.min(index, maxIndex);

  // auto slide: har 3 second mein 1 card
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((p) => (p >= maxIndex ? 0 : p + 1));
    }, 3000); // speed yahan badlo (milliseconds)
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);
  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);

  return (
    <section className="clients-section">
      <div className="clients-header">
        <span className="clients-eyebrow">Our Clients</span>
        <h2>
          Trusted by Businesses <span>Worldwide</span>
        </h2>
        <p>
          We partner with businesses of all sizes to deliver innovative digital
          solutions that create lasting value, drive growth, and turn ideas into
          measurable success.
        </p>
      </div>

      <div
        className="clients-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="clients-arrow left" onClick={prev} aria-label="Previous">
          ‹
        </button>

        <div className="clients-slider" ref={viewRef}>
          <div
            className="clients-track"
            style={{ transform: `translateX(-${current * (cardW + GAP)}px)` }}
          >
            {clients.map((c, i) => (
              <div className="client-card" key={i} style={{ width: cardW }}>
                <div className="client-img">
                  {c.image && <img src={c.image} alt={c.name} loading="lazy" />}
                </div>
                <span className="client-type">{c.type}</span>
                <h3>{c.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <button className="clients-arrow right" onClick={next} aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
};

export default ClientsSlider;