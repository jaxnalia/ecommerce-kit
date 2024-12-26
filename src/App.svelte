<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte';
  import ProductCard from './lib/components/ProductCard.svelte';
  import ProductFilters from './lib/components/ProductFilters.svelte';
  import { products } from './lib/data/products';

  let selectedCategory = '';
  let priceSort = '';
  
  $: filteredProducts = products
    .filter(p => !selectedCategory || p.metadata.category === selectedCategory)
    .sort((a, b) => {
      if (!priceSort) return 0;
      const priceA = a.reducedPrice ?? a.price;
      const priceB = b.reducedPrice ?? b.price;
      return priceSort === 'low' ? priceA - priceB : priceB - priceA;
    });

  function handleCategoryChange(event: CustomEvent<string>) {
    selectedCategory = event.detail;
  }

  function handlePriceSort(event: CustomEvent<string>) {
    priceSort = event.detail;
  }
</script>

<main class="min-h-screen bg-gray-100">
  <Navbar />
  
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>
    
    <ProductFilters 
      on:categoryChange={handleCategoryChange}
      on:priceSort={handlePriceSort}
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
  </div>
</main>