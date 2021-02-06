type Unit = 'cm' | 'px' | '%'

let units: Unit[] = ['cm', 'px', '%'];

function parseUnit(value: string): Unit | null {
  for (let unit of units) {
    if(value.endsWith(unit)) {
      return unit;
    }
  }
  return null;
}

type Width = {
  unit: Unit,
  value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {

  if(width == null) return null;

  if( typeof width === 'number') return {unit: 'px', value: width};

  const unit = parseUnit(width);

  if(unit) return {unit, value: parseFloat(width)};

}


