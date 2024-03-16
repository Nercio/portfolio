import { useEffect, useState } from "react";
import { fetchPageInfo } from "@/utils/sanity/fetchPageInfo";
import { PageInfoProps } from "../../typings";

export function usePageInfo() {
  const [pageInfo, setPageInfo] = useState<PageInfoProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageInfo();
      setPageInfo(data);
    };

    fetchData();
  }, []);

  return pageInfo;
}
