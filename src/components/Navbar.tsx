import { ShoppingCart, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/lib/store';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
          <Store className="h-6 w-6" />
          <span>FakeStore</span>
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2">
              {itemCount}
            </Badge>
          )}
        </Link>
      </div>
    </nav>
  );
}