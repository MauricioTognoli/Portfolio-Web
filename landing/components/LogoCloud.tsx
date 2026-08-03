"use client";

import { useLanguage } from "@/lib/i18n";
import { dataLogoCloud } from "@/data";

const LogoCloud = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-logo-cloud">
      <div className="mt-logo-cloud-inner">
        <span className="mt-logo-cloud-label">{t.logocloud.label}</span>
        <div className="mt-logo-cloud-items">
          {dataLogoCloud.map((name) => (
            <span className="mt-logo-item" key={name}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
