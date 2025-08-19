import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';
import ArticleCard from '../../components/column/ArticleCard';
import RecommendedCategory from '../../components/column/RecommendedCategory';
import type { ColumnProps } from '../../types/Column';

const Column: React.FC<ColumnProps> = ({ className }) => {
  const articles = [
    { image: "/images/column-1.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-2.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-3.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-4.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-5.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-6.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-7.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
    { image: "/images/column-8.jpg", date: "2021.05.17   23:25", title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tags: "#魚料理  #和食  #DHA" },
  ];

  const categories = [
    { title: "RECOMMENDED\nCOLUMN", subtitle: "オススメ" },
    { title: "RECOMMENDED\nDIET", subtitle: "ダイエット" },
    { title: "RECOMMENDED\nBEAUTY", subtitle: "美容" },
    { title: "RECOMMENDED\nHEALTH", subtitle: "健康" },
  ];

  return (
    <PageLayout className="bg-white">
      {/* Main Content */}
      <div className="flex flex-col gap-8 justify-start items-center w-full mt-[28px] sm:mt-[42px] lg:mt-[56px]">
        {/* Recommended Categories Section */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((c, i) => (
              <RecommendedCategory key={i} title={c.title} subtitle={c.subtitle} />
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="w-full">
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {articles.map((a, i) => (
                <ArticleCard key={i} {...a} />
              ))}
            </div>

            <Button className="mt-4 px-8 py-3 rounded-[5px] text-[16px] sm:text-[18px] font-light text-white bg-gradient-to-r from-[#FFCC21] to-[#FF963C]">
              コラムをもっと見る
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Column;
