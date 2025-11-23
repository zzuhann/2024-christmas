import { FormErrors } from "@/types/error";
import {
  TitleWrapper,
  TitleLine,
  SectionTitle,
  BlueBlock,
  ContactForm,
  FormGroup,
  SubmitButton,
  TitleContainer,
} from "@/styles/HomeStyles";
import EndingAnimation from "../EndingAnimation";

interface ContactBlockProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isEnded: boolean;
  isAfterEnded: boolean;
  isSubmitting: boolean;
  errors: FormErrors;
}

export default function ContactBlock({
  onSubmit,
  isEnded,
  isAfterEnded,
  isSubmitting,
  errors,
}: ContactBlockProps) {
  return (
    <section>
      <TitleWrapper>
        <TitleLine />
        <TitleContainer>
          <SectionTitle>明信片要送到 ... ?</SectionTitle>
          <BlueBlock />
        </TitleContainer>
        <TitleLine />
      </TitleWrapper>

      <ContactForm
        onSubmit={onSubmit}
        style={{ position: "relative" }}
        noValidate
      >
        <EndingAnimation isEnded={isEnded} isAfterEnded={isAfterEnded} />
        <FormGroup>
          <label htmlFor="name">
            你的名字
            <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="address">
            地址（可以寫面交/也可以寫email）
            <span className="required">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className={errors.address ? "error" : ""}
          />
          {errors.address && (
            <div className="error-message">{errors.address}</div>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="status">你的近况</label>
          <div className="description">
            如果生活圈比較遠，剛好又沒有寫近況的話，怕寫的很官方、可能就不會寄了哦
            &gt;&lt;!
          </div>
          <textarea id="status" name="status"></textarea>
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">想額外說的話</label>
          <textarea id="message" name="message"></textarea>
        </FormGroup>
        <SubmitButton
          type="submit"
          disabled={isEnded || isSubmitting}
          $isLoading={isSubmitting}
        >
          送出
        </SubmitButton>
      </ContactForm>
    </section>
  );
}
