class Minion:
    _location: Location

    def action(self):
        if self.is_frontline():
            # Do Something

    def is_frontline(self)
        return self._location.is_frontline()

class Location:
    _field: Field

    def is_frontline(self)
        return self._field.is_frontline()

class Field:
    def is_frontline(self):
        # do something