import { Photo } from "@/components/ui/Photo";

export function BrandLogo() {
  return (
    <span aria-hidden="true" className="relative block h-10 w-[148px] shrink-0">
      <Photo
        src="/logo/varchol-logo-vektor.svg"
        alt=""
        label="Varchol, eternit a azbest"
        fill
        sizes="148px"
        tone="dark"
        fit="contain"
        unoptimized
      />
    </span>
  );
}
