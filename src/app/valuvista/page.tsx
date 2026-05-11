import { ProductPageTemplate } from '@/components/marketing/product-page-template';
import { getProductBySlug } from '@/lib/site-content';

const product = getProductBySlug('valuvista');

export default function ValuVistaPage() {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
}
