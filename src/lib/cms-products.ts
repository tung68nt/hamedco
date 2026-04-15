import { promises as fs } from 'fs';
import path from 'path';
import { ALL_PRODUCTS } from '@/data/products';

const DATA_FILE = path.join(process.cwd(), 'src/data/cms-products.json');

interface CMSProduct {
  [key: string]: any;
}

interface CMSData {
  products: CMSProduct[];
  lastUpdated: string | null;
}

async function readCMSData(): Promise<CMSData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { products: [], lastUpdated: null };
  }
}

async function writeCMSData(data: CMSData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function getAllProducts(): any[] {
  return ALL_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<any | null> {
  const product = ALL_PRODUCTS.find((p: any) => p.slug === slug);
  return product || null;
}

export async function createProduct(productData: any): Promise<{ success: boolean; product?: any; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const newProduct: CMSProduct = {
      ...productData,
      id: `cms-${Date.now()}`,
      _createdAt: new Date().toISOString(),
      _updatedAt: new Date().toISOString(),
      _source: 'cms'
    };
    
    cmsData.products.push(newProduct);
    cmsData.lastUpdated = new Date().toISOString();
    
    await writeCMSData(cmsData);
    
    return { success: true, product: newProduct };
  } catch (err: any) {
    console.error('Failed to create product:', err);
    return { success: false, error: err.message };
  }
}

export async function updateProduct(
  slug: string, 
  productData: any
): Promise<{ success: boolean; product?: any; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const index = cmsData.products.findIndex((p: CMSProduct) => p.slug === slug);
    
    if (index === -1) {
      const staticProduct = ALL_PRODUCTS.find((p: any) => p.slug === slug);
      if (!staticProduct) {
        return { success: false, error: 'Sản phẩm không tồn tại' };
      }
      
      const updated: CMSProduct = {
        ...staticProduct,
        ...productData,
        id: staticProduct.id,
        _updatedAt: new Date().toISOString(),
        _source: 'cms'
      };
      
      cmsData.products.push(updated);
    } else {
      cmsData.products[index] = {
        ...cmsData.products[index],
        ...productData,
        _updatedAt: new Date().toISOString()
      };
    }
    
    cmsData.lastUpdated = new Date().toISOString();
    await writeCMSData(cmsData);
    
    const updated = cmsData.products.find((p: CMSProduct) => p.slug === slug);
    return { success: true, product: updated };
  } catch (err: any) {
    console.error('Failed to update product:', err);
    return { success: false, error: err.message };
  }
}

export async function deleteProduct(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const index = cmsData.products.findIndex((p: CMSProduct) => p.slug === slug);
    if (index === -1) {
      return { success: false, error: 'Sản phẩm không tồn tại trong CMS' };
    }
    
    cmsData.products.splice(index, 1);
    cmsData.lastUpdated = new Date().toISOString();
    
    await writeCMSData(cmsData);
    
    return { success: true };
  } catch (err: any) {
    console.error('Failed to delete product:', err);
    return { success: false, error: err.message };
  }
}
