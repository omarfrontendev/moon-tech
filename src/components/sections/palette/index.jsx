import MainBadge from "@/components/ui/main-badge";
import SectionTitle from "@/components/ui/section-title";
import { AuxiliaryIcon, LeadIcon } from "@/icons";
import PaletteList from "./palette-list";
import MainButton from "@/components/ui/main-badge";

const Palette = () => (
    <section>
        <div className="d-flex align-tems-center jsutify-content-between">
            <div className="padding-left-64">
                <SectionTitle
                    titlesize={{ fontSize: "84px" }}
                    subtitleStyles={{ fontSize: "20px" }}
                    title="Palette <br />panorama"
                    subtitle="Select a diet , set goals , and plan <br /> workout days"
                />
                <div className="d-flex align-items-center gap-2 mt-4">
                    <MainButton><LeadIcon /> 4 leading</MainButton>
                    <MainButton><AuxiliaryIcon /> 22 auxiliary</MainButton>
                </div>
            </div>
            <PaletteList />
        </div>
    </section>
);

export default Palette;