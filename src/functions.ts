export interface InstalmentPlanTypes {
  [key: string]: number;
  accelerated: number;
  part: number;
}

export interface PlanTypes extends InstalmentPlanTypes {
  full: number;
}

export interface DiscountAmounts extends PlanTypes {
  rate: number;
}

export interface Course {
  code: string;
  name: string;
  primary: boolean;
  baseCost: number;
  discount: PlanTypes;
  secondaryDiscount: number;
  secondaryDiscountAmount: number;
  campaignDiscount: PlanTypes;
  deposit: PlanTypes;
  installmentSize: InstalmentPlanTypes;
  installments: InstalmentPlanTypes;
  countryCode: string;
  provinceCode: string;
  noShipping: boolean;
  currency: {
    code: string;
    symbol: string;
    name: string;
    exchangeRate: number;
  };
  minimumDeposit: number;
  free: boolean;
}

export interface Campaign {
  id: string | null;
  codeId: number | null;
  offerType: 'constant' | 'percentage' | 'bonus';
  minimumPaymentPlan: 'full' | 'accelerated' | 'part';
  bonusTitle: string;
  bonusHTML: string;
  potentialDiscount: DiscountAmounts;
  discount: DiscountAmounts;
  courseRestrictionType: string | null;
  courses: Array<{
    course_code: string;
    name: string;
  }>;
  requirementsMet: boolean;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number;
}

export interface Price {
  cost: number;
  secondaryDiscount: number;
  discount: PlanTypes;
  deposit: PlanTypes;
  installmentSize: InstalmentPlanTypes;
  installments: InstalmentPlanTypes;
  countryCode: string | null;
  provinceCode: string | null;
  currency: Currency;
  disclaimers: string[];
  notes: string[];
  campaign?: Campaign;
  noShipping: boolean;
  noShippingMessage?: string;
  numCourses: number;
  courses: { [course: string]: Course };
  discountAll: boolean;
  complete: boolean;
  noShipCountry: boolean;
}

export const getTelephoneNumber = (countryCode: string) => {
  if (countryCode === 'CA') {
    return '1-833-000-000';
  }
  return '+1 613-749-8248';
};
