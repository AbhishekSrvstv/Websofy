import {
  FaImage,
  FaPenNib,
  FaPaintBrush,
  FaLayerGroup,
  FaMagic,
  FaFigma,
  FaSketch,
  FaThLarge,
  FaMousePointer,
  FaEye,
  FaShapes,
  FaFont,
  FaPalette,
  FaPencilRuler,
  FaPrint,
  FaFilm,
  FaVideo,
  FaCube,
  FaTabletAlt,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Graphic Design",
    desc: "Creative visuals designed to make your brand stand out.",
    items: [
      { label: "Photoshop", icon: FaImage },
      { label: "Illustrator", icon: FaPenNib },
      { label: "Canva", icon: FaPaintBrush },
      { label: "InDesign", icon: FaLayerGroup },
      { label: "Photo Editing", icon: FaMagic },
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Modern interfaces built around usability and great experiences.",
    items: [
      { label: "Figma", icon: FaFigma },
      { label: "Sketch", icon: FaSketch },
      { label: "Wireframing", icon: FaThLarge },
      { label: "Prototyping", icon: FaMousePointer },
      { label: "Visual Design", icon: FaEye },
    ],
  },
  {
    title: "Branding",
    desc: "Memorable brand identities that create a strong visual presence.",
    items: [
      { label: "Logo Design", icon: FaShapes },
      { label: "Typography", icon: FaFont },
      { label: "Color Design", icon: FaPalette },
      { label: "Illustration", icon: FaPencilRuler },
      { label: "Print Design", icon: FaPrint },
    ],
  },
  {
    title: "Motion & 3D",
    desc: "Dynamic graphics and immersive visuals for digital experiences.",
    items: [
      { label: "Motion Graphics", icon: FaFilm },
      { label: "Video Editing", icon: FaVideo },
      { label: "3D Design", icon: FaCube },
      { label: "Digital Artwork", icon: FaTabletAlt },
    ],
  },
];

export default function GraphicSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Creative Expertise <i></i>
        </span>

        <h2>
          Tools &amp; Techniques <span>We Use</span>
        </h2>

        <p>
          We combine creative tools and modern design techniques to create
          impactful, memorable visuals.
        </p>
      </div>

      <div className="ms__list">
        {GROUPS.map(({ title, desc, items }, index) => (
          <div className="ms__row" key={title}>
            <div className="ms__info">
              <span className="ms__num">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{title}</h3>
              <p>{desc}</p>
            </div>

            <div className="ms__chips">
              {items.map(({ label, icon: Icon }) => (
                <span className="ms__chip" key={label}>
                  <span className="ms__chip-icon">
                    <Icon />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}