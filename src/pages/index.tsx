import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export function PageIndex() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Monitore seu&nbsp;</span>
          <span className={title({ color: "violet" })}>humor&nbsp;</span>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            + humor
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
