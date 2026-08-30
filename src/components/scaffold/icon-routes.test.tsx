import { describe, it, expect } from "vitest";
import * as IconModule from "@/app/icon";
import * as AppleIconModule from "@/app/apple-icon";

describe("app icon routes", () => {
  it("exports correct metadata for favicon", () => {
    expect(IconModule.size).toEqual({ width: 32, height: 32 });
    expect(IconModule.contentType).toBe("image/png");
    expect(IconModule.runtime).toBe("edge");
    expect(typeof IconModule.default).toBe("function");
  });

  it("exports correct metadata for apple touch icon", () => {
    expect(AppleIconModule.size).toEqual({ width: 180, height: 180 });
    expect(AppleIconModule.contentType).toBe("image/png");
    expect(AppleIconModule.runtime).toBe("edge");
    expect(typeof AppleIconModule.default).toBe("function");
  });
});
