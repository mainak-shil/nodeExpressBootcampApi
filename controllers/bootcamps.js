/**
 * @desc    Get all bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show all bootcamps` });
};

/**
 * @desc    Get single bootcamp
 * @route   GET /api/v1/bootcamp/:id
 * @access  Public
 */
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get bootcamp of ${req.params.id}` });
};

/**
 * @desc    Create bootcamp
 * @route   POST /api/v1/bootcamp
 * @access  Private
 */
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp` });
};

/**
 * @desc    Create bootcamp
 * @route   PUT /api/v1/bootcamp/:id
 * @access  Private
 */
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp of ${req.params.id}` });
};

/**
 * @desc    Delete bootcamp
 * @route   DELETE /api/v1/bootcamp/:id
 * @access  Private
 */
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp of ${req.params.id}` });
};
