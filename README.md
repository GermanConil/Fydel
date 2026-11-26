# Fydel

Landing comercial y prototipo interactivo de fidelización para negocios gastronómicos.

## Desarrollo

Requiere Node.js 22 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

- Landing: http://localhost:3000
- Prototipo: http://localhost:3000/prototipo

## Producción

```bash
pnpm build
pnpm start
```

## Verificación de tipos

```bash
pnpm exec tsc --noEmit
```

Construido con Next.js, React, TypeScript y CSS. El prototipo utiliza datos simulados: no procesa pagos reales ni requiere un backend.
