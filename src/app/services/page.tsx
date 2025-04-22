import Header from '@/components/common/Header';
import CloudBanner from '@/components/pages/cloud-server/CloudBanner';
import TagMenu from '@/components/pages/cloud-server/Tags';

export default function Home() {
  return (
    <div>
      <Header />
  
       <CloudBanner/>
       <TagMenu/>
      
    </div>
  );
}
