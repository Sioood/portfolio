<template>
  <div>
    <Teleport to="#teleports">
      <!-- Need to find a workaround with gsap and scrollSmoother for sticky, like pinned or something -->
      <header class="fixed top-0 z-[666] w-full">
        <Nav></Nav>
      </header>
    </Teleport>
    <slot />
  </div>
</template>
