import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_compornents/NewsList";

export default async function page() {
    const { contents: news } = await getNewsList();

    return <NewsList news={news} />;
}