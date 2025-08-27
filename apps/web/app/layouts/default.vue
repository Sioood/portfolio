<template>
  <Teleport to="#teleports">
    <!-- Need to find a workaround with gsap and scrollSmoother for sticky, like pinned or something -->
    <header class="w-full z-[666] fixed top-0">
      <Nav></Nav>
    </header>
  </Teleport>
  <slot />
</template>
