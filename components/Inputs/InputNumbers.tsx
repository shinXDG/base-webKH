import NumberFormat from 'react-number-format'

export default function InputNumbers() {
  return (
    <NumberFormat
      thousandsGroupStyle="wan"
      value=""
      decimalSeparator="."
      displayType="text"
      type="text"
      thousandSeparator={true}
      allowNegative={true}
      suffix=""
      decimalScale={3}
    />
  )
}
