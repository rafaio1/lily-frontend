import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routes } from "@/config/site";

import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("renders links that mirror the route registry", () => {
    render(<SiteHeader />);

    const expectedRoutes = [
      { label: /docs/i, href: routes.docs },
      { label: /sign in/i, href: routes.signin },
      { label: /dashboard/i, href: routes.dashboard },
    ];

    for (const { label, href } of expectedRoutes) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    }
  });
});
