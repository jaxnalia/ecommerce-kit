<script lang="ts">
  import FloatingCartButton from './FloatingCartButton.svelte';
  import CartDrawer from './CartDrawer.svelte';
  
  let isMenuOpen = false;
  let isCartOpen = false;
</script>

<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-gray-800">ShopSmart</a>
      </div>
      
      <div class="hidden md:flex items-center space-x-4">
        <a href="/" class="text-gray-600 hover:text-gray-900">Home</a>
        <a href="/products" class="text-gray-600 hover:text-gray-900">Products</a>
      </div>

      <button 
        class="md:hidden flex items-center"
        on:click={() => isMenuOpen = !isMenuOpen}>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
        <a href="/products" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Products</a>
      </div>
    </div>
  {/if}
</nav>

<FloatingCartButton onClick={() => isCartOpen = true} />
<CartDrawer bind:isOpen={isCartOpen} />