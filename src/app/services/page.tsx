import Header from '@/components/common/Header';
import CloudBanner from '@/components/pages/services/CloudBanner';
import Pannel from '@/components/pages/services/Pannel';
import TagMenu from '@/components/pages/services/Tags';

export default function Home() {
  return (
    <div>
      <Header />
       <CloudBanner/>
       <TagMenu/>
       <Pannel/>
    </div>
  );
}
