import { ProductPageTemplate } from '@/components/marketing/product-page-template';
import { getProductBySlug } from '@/lib/site-content';

const product = getProductBySlug('renoscope');

export default function RenoScopePage() {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
}
