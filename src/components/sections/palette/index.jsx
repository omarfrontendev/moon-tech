import SectionTitle from "@/components/ui/section-title";
import { AuxiliaryIcon, LeadIcon } from "@/icons";
import PaletteList from "./palette-list";
import MainButton from "@/components/ui/main-badge";
import useIsMobile from "@/hooks/useIsMobile";

const Palette = () => {

    const isTablet = useIsMobile(991);
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section>
            <div className="d-flex flex-column flex-md-row align-tems-center jsutify-content-between gap-3">
                <div className="padding-left-64">
                    <SectionTitle
                        titleStyles={{ fontSize: isMobile ? "56px" : isTablet ? "64px" : "84px" }}
                        subtitleStyles={{ fontSize: isMobile ? "14px" : isTablet ? "16px" : "20px" }}
                        title="Palette <br />panorama"
                        subtitle="Select a diet , set goals , and plan <br /> workout days"
                    />
                    <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                        <MainButton><LeadIcon /> 4 leading</MainButton>
                        <MainButton><AuxiliaryIcon /> 22 auxiliary</MainButton>
                    </div>
                </div>
                <PaletteList />
            </div>
        </section>
    );
};

export default Palette;