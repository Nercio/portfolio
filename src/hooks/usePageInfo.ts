import { useEffect, useState } from "react";
import { fetchPageInfo } from "@/utils/sanity/fetchPageInfo";
import { PageInfoProps } from "../../typings";

export function usePageInfo() {
  const [pageInfo, setPageInfo] = useState<PageInfoProps | null>(null);
  const [pageInfoLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchPageInfo();
      setLoading(false);
      setPageInfo(data);
    };

    fetchData();
  }, []);

  return { pageInfo, pageInfoLoading };
}
