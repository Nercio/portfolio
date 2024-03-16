import { useEffect, useState } from "react";
import { fetchSocials } from "@/utils/sanity/fetchSocials";
import { SocialsProps } from "../../typings";

export function useSocials() {
  const [socials, setSocials] = useState<SocialsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSocials();
      setSocials(data);
    };

    fetchData();
  }, []);

  return socials;
}
